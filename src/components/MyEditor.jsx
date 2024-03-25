import ImageResize from 'quill-image-resize-module-react';
import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // 引入編輯器樣式

// 引入 imageDrop 模組
import Quill from 'quill';

// 註冊模組
Quill.register('modules/imageResize', ImageResize);
// Quill.register('modules/imageDropAndPaste', QuillImageDropAndPaste);

function MyEditor() {
  const quillRef = useRef(null); // 用於存取 Quill 實例
  const [value, setValue] = useState('');

  const handleChange = (content) => {
    setValue(content);
  };

  const modules = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ direction: 'rtl' }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ align: [] }],
        ['link', 'image', 'video'],
        ['clean'],
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
    //     imageData.minify({
    //       maxWidth: 320,
    //       maxHeight: 320,
    //       quality: .7
    //     }).then((miniImageData) => {
    //       const blob = miniImageData.toBlob()
    //       // const file = miniImageData.toFile('my_cool_image.png')
    
    //       console.log(`type: ${type}`)
    //       console.log(`dataUrl: ${imageDataUrl}`)
    //       console.log(`blob: ${blob}`)
    //       // console.log(`file: ${file}`)
    
    //       // 創建一個新的 `FileReader` 對象
    //       const reader = new FileReader();

    //       // 讀取圖片文件
    //       reader.readAsDataURL(blob);

    //       // 讀取成功後，將圖片插入編輯器
    //       reader.onload = () => {
    //         const editor = quillRef.current.getEditor();
    //         // const image = editor.insertEmbed(editor.getSelection().index + 1, 'image', reader.result);

    //         let index = (editor.getSelection() || {}).index
    //         console.log(`index: ${index}`)
    //         if (index === undefined || index < 0) {
    //           index = quillRef.current.getLength()
    //         }
    //         console.log(`index: ${index}`)
    //         editor.insertEmbed(index, 'image', reader.result, 'user')

    //         // // 設置圖片的寬度和高度
    //         // image.setAttributes({
    //         //   width: imageData.width,
    //         //   height: imageData.height
    //         // });
    //       };
    //     })


      // },
    // },
  };

  return (
    <div>
      <h2>React Quill Example</h2>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={handleChange}
        modules={modules} // 傳遞模組設定
      />
    </div>
  );
}

export default MyEditor;
