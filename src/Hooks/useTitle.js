import { useEffect } from "react";


const useTitle = (title) => {
    useEffect(()=>{
     document.title = `${title} - Beauty Salon`;
    }, [title])

    }

export default useTitle;