import { SearchBox } from '@/components/molecules/SearchBox';
import { useModalAINewsOrganism } from '@/composables/useModalAINewsOrganism.ts';
import { Title } from '@/components/atoms/Title';
import Vector from '@/assets/img/Vector.png';
import './style.scss';
import { Button, Col, Image, Row, Tooltip } from 'antd';
import { CommonPagination } from '@/components/atoms/CommonPagination';
import { CommonModal } from '@/components/atoms/CommonModal';
import { InputWithTitle } from '@/components/molecules/InputWithTitle';
import { InputType } from '@/types/enums/input-type.ts';
import { TagSelect } from '@/components/molecules/TagSelect';
import { CommonButton } from '@/components/atoms/CommonButton';

export const ModalAINewsOrganism = () => {
  const {
    tags,
    tagRef,
    distinguishs,
    titleRef,
    linkRef,
    postingDateAndTimeRef,
    distinguishRef,
    overviewRef,
    isOpenModal,
    data,
    searchRef,
    selectedPage,
    handleOpenModal,
    handleChangePage,
    handleClickSearch,
    handleClickOk,
  }
    = useModalAINewsOrganism();
  return <div className={'modal-ai-news-organism'}>
    <SearchBox title={'検索'} name={'search'} placeHolder={'記事タイトル / 区分 / タグ'} ref={searchRef}
               handleClickSearch={handleClickSearch} />
    <div className={'ai-news-content'}>
      <div className={'flex justify-between mb-6'}>
        <Title text={'AI News 一覧'} />
        <Button onClick={handleOpenModal} className={'button-common-light'}>NEWS記事を作成</Button>
      </div>
      <div className={'table-news w-full'}>
        <div className={'table-content'}>
          <Row className={'mb-2 table-header mx-4'}>
            <Col className={'flex text-ellipsis whitespace-pre-line place-items-center'} span={3}>
              <span>元記事投稿日時</span>
              <Image height={'10px'} width={'12px'} preview={false} className={'ml-2'} src={Vector} />
            </Col>
            <Col className={'flex justify-center whitespace-pre-line place-items-center '} span={4}>
              <span>区分</span>
              <Image height={'10px'} width={'12px'} preview={false} className={'ml-2'}
                     src={Vector} /></Col>
            <Col className={'flex whitespace-pre justify-center place-items-center text-ellipsis'} span={6}>記事タイトル</Col>
            <Col className={'flex whitespace-pre-line justify-center place-items-center text-ellipsis'} span={7}>概要</Col>
            <Col className={'flex whitespace-pre-line justify-center place-items-center text-ellipsis pr-10'} span={3}>タグ</Col>
          </Row>
          <div className={'table-body '}>
            {data.map((item, index) => (
              <Row key={index} className={'py-6 mx-4 '}>
                <Col className={'text-left whitespace-pre-line pr-5'}
                     span={3}>{item.originalArticlePostingDateAndTime}</Col>
                <Col className={'text-center text-ellipsis overflow-x-hidden px-5'} span={4}>
                  <div className={'distinguish w-full'}>{item.distinguish}</div>
                </Col>
                <Col className={'text-center whitespace-nowrap overflow-x-hidden px-5'}
                     span={6}>
                  <Tooltip title={item.articleTitle} placement={'topRight'}>
                    {item.articleTitle.substring(0, 19)}
                  </Tooltip></Col>
                <Col className={'text-center text-ellipsis whitespace-nowrap overflow-x-hidden px-5'}
                     span={7}>
                  <Tooltip title={item.articleTitle} placement={'topRight'}>
                    {item.overview.substring(0, 24)}
                  </Tooltip>
                </Col>
                <Col className={' whitespace-nowrap overflow-x-hidden pr-10'} span={3}>{item.tag}

                </Col>
                <Col span={1} className={'flex place-items-center justify-end'}>
                  <svg xmlns='http://www.w3.org/2000/svg' width='8' height='12' viewBox='0 0 8 12'
                       fill='none'>
                    <path
                      d='M7.70709 5.39485C8.09764 5.72955 8.09764 6.27312 7.70709 6.60783L1.70826 11.749C1.31771 12.0837 0.68346 12.0837 0.292912 11.749C-0.0976372 11.4143 -0.0976372 10.8707 0.292912 10.536L5.58563 6L0.296036 1.46402C-0.0945128 1.12931 -0.0945128 0.585741 0.296036 0.251032C0.686585 -0.0836773 1.32084 -0.0836773 1.71138 0.251032L7.71021 5.39217L7.70709 5.39485Z'
                      fill='#4B4B4B' />
                  </svg>
                </Col>

              </Row>
            ))}

          </div>
        </div>

      </div>

      <CommonModal
        title='AI News 記事登録'
        isOpen={isOpenModal}
        handleOk={handleClickOk}
        handleCancel={() => handleOpenModal()}
        footer={[
          <CommonButton key={'btnCancel'} isOutline={true} content={'キャンセル'} handleClick={handleOpenModal} />,
          <CommonButton key={'btnRegister'} content={'登録'} handleClick={handleClickOk} />,
        ]}
      >
        <div style={{ width: '616px' }} className={' '}>
          <InputWithTitle name={'title'} placeHolder={''} ref={titleRef} title={'タイトル'}
                          type={InputType.TEXT} />
        </div>
        <div style={{ width: '616px' }} className={'mt-6'}>
          <InputWithTitle type={InputType.AREA} name={'overview'} placeHolder={''} ref={overviewRef}
                          title={'概要'} />
        </div>
        <div style={{ width: '217px' }} className={'mt-6'}>
          <InputWithTitle type={InputType.DATE} name={'postingDateAndTime'} placeHolder={'yyyy/mm/dd hh:mm'}
                          ref={postingDateAndTimeRef} title={'元記事投稿日時'} />
        </div>
        <div style={{ width: '616px' }} className={'mt-6'}>
          <InputWithTitle name={'link'} placeHolder={''} ref={linkRef} type={InputType.TEXT}
                          title={'リンク'} />
        </div>
        <div style={{ width: '368px' }} className={'mt-6'}>
          <InputWithTitle options={distinguishs} name={'tag'} ref={distinguishRef}
                          type={InputType.SELECT}
                          title={'区分'} placeHolder={""}/>
        </div>
        <div className={'mt-6'}>
          <TagSelect tags={tags} title={'タグ'} ref={tagRef} />
        </div>


      </CommonModal>

      <CommonPagination className={'mt-8'} onPageChange={handleChangePage} selected={selectedPage} total={1} />
    </div>
  </div>;
};

