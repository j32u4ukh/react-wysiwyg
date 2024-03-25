import ImageResize from 'quill-image-resize-module-react';
import React, { useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // 引入編輯器樣式

// 引入 imageDrop 模組
import Quill from 'quill';
// import QuillImageDropAndPaste from 'quill-image-drop-and-paste';

// 註冊模組
Quill.register('modules/imageResize', ImageResize);
// Quill.register('modules/imageDropAndPaste', QuillImageDropAndPaste);

function MyEditor() {
  const quillRef = useRef(null); // 用於存取 Quill 實例
  const [value, setValue] = useState('');

  const handleChange = (content) => {
    const editor = quillRef.current.getEditor();
    const qcontent = editor.getContents();
    console.log(`qcontent: ${JSON.stringify(qcontent, null, 4)}`);
    setValue(content);
  };

  const modules = {    
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike', 'color'],
        // ['blockquote', 'code-block'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        // [{ indent: '-1' }, { indent: '+1' }],
        // [{ direction: 'rtl' }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        // [{ font: [] }],
        // [{ align: [] }],
        ['link', 'image', 'video'],
        // ['clean'],
      ],
    },
    imageResize: {},
    // imageDropAndPaste: {
    //   handler: (imageDataUrl, type, imageData) => {
    //     console.log(`imageDataUrl: ${imageDataUrl}`)
    //     console.log(`type: ${type}`)
    //     console.log(`imageData: ${JSON.stringify(imageData)}`)
    //     // 這裡可以處理貼上或拖放的圖片
    //     // 例如，將圖片上傳到您的伺服器，然後插入到編輯器中
    //     // 這裡只是一個範例，您需要根據您的需求來實現圖片的上傳和插入
    //     // 將圖片插入編輯器
    //   },
    // },
  };

  useEffect(()=>{
    const editor = quillRef.current.getEditor();
    const content = editor.getContents();
    console.log(`content: ${JSON.stringify(content, null, 4)}`);
    // editor.insertEmbed(10, 'image', 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7aab8e12b56a4eac9bbc779bd7da420c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp');
  }, []);

  return (
    <div>
      <h2>React Quill Example</h2>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        formats={['image']}
        value={value}
        onChange={handleChange}
        modules={modules} // 傳遞模組設定
      />
    </div>
  );
}

export default MyEditor;
