import React from 'react';

function FileLink(props) {
    return (
        <>
            <a className='DocLink' target="_blank" href={props.doclink}>- {props.docname}.pdf</a>
        </>
    );
}

export default FileLink;