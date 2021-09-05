import { Dispatch, SetStateAction } from 'react'
import { Pagination } from 'antd'
import PageStyle from '@/styles/videos/page.module.css'

const Page = ({ count, pagesize, setPage, page }:
  { count: number, pagesize: number, setPage: Dispatch<SetStateAction<number>>, page: number }) => {

  const pageChange = (page) => {
    setPage(page);
  }

  return (
    <div className={PageStyle.wrapper}>
      <Pagination
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