import React from 'react'
import { ImageLinkFormContainer, Paragraph, FormContainer, FormItem, Input, Button } from './ImageLinkFormElements';

const ImageLinkForm = () => {
    return (
        <ImageLinkFormContainer>
            <Paragraph>
                {`This Magic Brain will detect faces in your pictures, try it out!`}
            </Paragraph>
            <FormContainer>
                <FormItem>
                    <Input>
                    </Input>
                    <Button>
                        Detect Face
                    </Button>
                </FormItem>
            </FormContainer>
        </ImageLinkFormContainer>
    )
}

export default ImageLinkForm