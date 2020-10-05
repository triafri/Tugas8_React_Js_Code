import React from 'react';
import {Figure} from 'react-bootstrap';

function PageFig(){
    return(
        <div>
            <Figure>
                <Figure.Image
                    width={60}
                    height={60}
                    alt="60x60"
                    src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
                />
                <Figure.Caption>Tri Afriliyanti</Figure.Caption>
            </Figure>
        </div>
    )
}

export default PageFig