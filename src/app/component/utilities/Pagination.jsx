import FlareCursor from '@/app/FlareCursor';

const Pagination = ({page, lastPage, setPage}) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((sebelum) => sebelum + 1)
        scrollTop()
    }
    const handleprevPage = () => {
        setPage((setelah) => setelah - 1)
        scrollTop()

        if (page == 1) {
            setPage (1)
            }
    }
    


    return(
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-white md:text-2xl text-xl">
            {page <= 1 ? null :
            <button onClick={handleprevPage} className="transition-all hover:text-blue-400">PREV</button>}
            
            <p>{page} OF {lastPage}</p>
            
            { page >= lastPage ? null: <button onClick={handleNextPage} className="transition-all hover:text-blue-400">NEXT</button>}
            <FlareCursor />
        </div>
    )
}

export default Pagination