import { Dispatch, SetStateAction } from 'react'
import { Pagination } from 'antd'
import PageStyle from '@/styles/videos/page.module.css'

const Page = ({ count, pagesize, setPage, page, isMobile }:
  { count: number, pagesize: number, setPage: Dispatch<SetStateAction<number>>, page: number, isMobile: boolean }) => {

  const pageChange = (page) => {
    setPage(page);
    window.scroll({ top: isMobile ? 500 : 310 });
  }

  return (
    <div className={PageStyle.wrapper}>
      <Pagination
        showSizeChanger={false}
        defaultCurrent={1}
        current={page}
        defaultPageSize={pagesize}
        total={count}
        onChange={pageChange}
      />
    </div>
  )
}

export default Page