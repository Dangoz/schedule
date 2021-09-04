import { Dispatch, SetStateAction } from 'react'
import { Pagination } from 'antd'

const Page = ({ count, pagesize, setPage, page }:
  { count: number, pagesize: number, setPage: Dispatch<SetStateAction<number>>, page: number }) => {

  const pageChange = (page) => {
    setPage(page);
  }

  return (
    <>
      <Pagination
        defaultCurrent={1}
        current={page}
        defaultPageSize={pagesize}
        total={count}
        onChange={pageChange}
      />
    </>
  )
}

export default Page