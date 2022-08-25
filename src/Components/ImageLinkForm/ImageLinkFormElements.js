import styled from "styled-components"



export const Paragraph = styled.p.attrs({
    className: "f4"
})``

export const FormContainer = styled.div.attrs({
    className: "form"
})`
display: flex;
justify-content: center;
`

export const FormItem = styled.div.attrs({
    className: "form-item pa4 br3 shadow-5 "
})`
    width: 700px;
    display: flex;
    justify-content: center;
`

export const Input = styled.input.attrs({
    className: "input f4 pa2 w-70 center"
    , type: "text"
    , placeholder: "Enter URL here"
})``

export const Button = styled.button.attrs({
    className: "button w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
    , type: "button"
    ,
})`
cursor: pointer;
`
