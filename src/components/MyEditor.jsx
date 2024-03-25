import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // 引入編輯器樣式

function MyEditor() {
  const [value, setValue] = useState('');

  const handleChange = (content) => {
    setValue(content);
  };

  return (
    <div>
      <h2>React Quill Example</h2>
      <ReactQuill
        theme="snow" // 使用 'snow' 主題，也可以使用 'bubble' 主題
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default MyEditor;
