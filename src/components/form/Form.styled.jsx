// Styled Components
import styled from 'styled-components'
// Responsive
import device from '../../styles/responsive/breakpoints'

const FormContent = styled.div`
    width: 85%;
    max-width: 550px;
    margin-inline: auto;
    border: 3px solid #fff;
    border-bottom: none;
    border-radius: 10px;
    padding-block: 1.2rem;
    margin-bottom: 60%;
    position: relative;
    ${device.tablet`
        margin-bottom: 40%;
        padding-block: 1.5rem;
    `}
`
const FormLetter = styled.img`
        position: absolute;
        top: 92%;
        left: 50%;
        transform: translateX(-50%);
        max-width: 140%;
        ${device.tablet`
        top: 83%;
    `}
`
const FormElement = styled.form`
    width: 85%;
    margin-inline: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1.5rem;

    & button{
        width: 100%;
        max-width: 60%;
        padding-block: 10px;
        padding-block: 15px;
        margin-top: 1.2rem;
    }
`

const FormField = styled.div`
    width: 100%;
    position: relative;
`
const FormLabel = styled.label`
    margin-bottom: .3rem;
    display: block;
    font-size: clamp(14px, 1.5vw, 16px);
`

const FormInput = styled.input`
    background-color: transparent;
    border: 1px solid #dfdfdff0;
    width: 100%;
    color: #dfdfdff0;
    padding: 0.25rem 0.5rem;
    border-color: ${({ $error }) => $error ? 'red' : '#dfdfdff0'};
`
const FormError = styled.span`
        color: #c74242;
        font-size: 12px;
        font-style: italic;
        position: absolute;
        left: 0;
        top: 107%;
`

const FormTextArea = styled.textarea`
    height: 50vw;
    max-height: 120px;
    background-color: transparent;
    border: 1px solid white;
    width: 100%;
    color: white;
    padding-left: 0.5rem;
    margin-bottom: 0rem;
    border-color: ${({ $error }) => $error ? 'red' : 'white'};

    & + span{
        top: 100%;
    }
`

export { FormContent, FormElement, FormField, FormLabel, FormInput, FormError, FormTextArea, FormLetter }
