import React from "react"


const Test1 = ({ loading }) => {
    console.log("test1")
    return (
        <>Test1</>
    )
}

export default React.memo(Test1)