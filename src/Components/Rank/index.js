import React from 'react';
import {
    RankContainer
    , RankItem
    , Paragraph
    , Paragraph2
} from './RankElements';

const Rank = () => {
    return (
        <RankContainer>
            <RankItem>
                <Paragraph>
                    {`User, your current rank is...`}
                </Paragraph>
                <Paragraph2>
                    {`#5`}
                </Paragraph2>
            </RankItem>
        </RankContainer>
    )
}

export default Rank