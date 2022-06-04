import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CKEditorInput = () => {
    return ( 
        <CKEditor 
            editor={ ClassicEditor }
            data="<p>Hello From CKEditor 5!</p>"
            onReady={ editor => {
                console.log('Editor is ready to use!', editor)
            }}
            onChange={ (event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data })
            }}
        />
     );
}
 
export default CKEditorInput;