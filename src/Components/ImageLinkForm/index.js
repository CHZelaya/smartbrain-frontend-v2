import React from 'react'
import { Paragraph, FormContainer, FormItem, Input, Button } from './ImageLinkFormElements';

const ImageLinkForm = () => {
    return (
        <>
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
        </>
    )
}

export default ImageLinkForm