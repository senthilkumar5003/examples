import React from 'react';
import { LoadError, Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';

interface RenderErrorExampleProps {
    fileUrl: string;
}

const RenderErrorExample: React.FC<RenderErrorExampleProps> = ({ fileUrl }) => {
    const renderError = (error: LoadError) => {
        let message = '';
        switch (error.name) {
            case 'InvalidPDFException':
                message = 'The document is invalid or corrupted';
                break;
            case 'MissingPDFException':
                message = 'The document is missing';
                break;
            case 'UnexpectedResponseException':
                message = 'Unexpected server response';
                break;
            default:
                message = 'Cannot load the document';
                break;
        }

        return (
            <div
                style={{
                    alignItems: 'center',
                    border: '1px solid rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    height: '100%',
                    justifyContent: 'center',
                }}
            >
                <div
                    style={{
                        backgroundColor: '#e53e3e',
                        borderRadius: '0.25rem',
                        color: '#fff',
                        padding: '0.5rem',
                    }}
                >
                    {message}
                </div>
            </div>
        );
    };

    return (
        <div style={{ border: '1px solid rgba(0, 0, 0, 0.3)', height: '750px' }}>
            <Viewer
                fileUrl={fileUrl}
                renderError={renderError}
            />
        </div>
    );
};

export default RenderErrorExample;
