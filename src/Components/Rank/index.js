import React from 'react';
import {
    Paragraph
    , Paragraph2
} from './RankElements';

const Rank = () => {
    return (
        <>
            <Paragraph>
                {`User, your current rank is...`}
            </Paragraph>
            <Paragraph2>
                {`#5`}
            </Paragraph2>
        </>
    )
}

export default Rank