import React from 'react';
import {
    Paragraph,
    Paragraph2
} from './RankElements';

const Rank = ({ name, entries }) => {
    return (
        <>
            <Paragraph>
                {`${name}, your current rank is...`}
            </Paragraph>
            <Paragraph2>
                {`${entries}`}
            </Paragraph2>
        </>
    )
}

export default Rank