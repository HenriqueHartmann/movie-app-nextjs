type HttpErrorComponentParams = {
    status: string,
    title: string,
    message: string,
    buttonText?: string,
    onClickCallback: () => void,
}

export default HttpErrorComponentParams
