import React from 'react'
import { Paragraph, FormContainer, FormItem, Input, Button } from './ImageLinkFormElements';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <>
            <Paragraph>
                {`This Magic Brain will detect faces in your pictures, try it out!`}
            </Paragraph>
            <FormContainer>
                <FormItem>
                    <Input onChange={onInputChange}>
                    </Input>
                    <Button onClick={onButtonSubmit}>
                        Detect Face
                    </Button>
                </FormItem>
            </FormContainer>
        </>
    )
}

export default ImageLinkForm