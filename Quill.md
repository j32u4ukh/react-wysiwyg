# Quill

## Options

Quill 不僅僅可以配置主題，options 一共支持 8 個配置選項：

1. bounds 編輯器內浮框的邊界
2. debug debug 級別
3. formats 格式白名單
4. modules 模塊
5. placeholder 占位文本
6. readOnly 只讀模式
7. scrollingContainer 滾動容器
8. theme 主題

## formats

若設置為空陣列，則貼入的內容全部都會變成純文本。

Quill 一共支持 11 種行內格式：

1. background
2. bold
3. color
4. font
5. code
6. italic
7. link
8. size
9. strike
10. script
11. underline

7種塊級格式：

1. blockquote
2. header
3. indent
4. list
5. align
6. direction
7. code-block

3種嵌入格式：

1. formula
2. image
3. video

不配置 formats 選項，會默認支持所有的 21 種格式。

## placeholder 占位文本

這可以很容易地通過配置 placeholder 選項實現。

```javascript
const quill = new Quill('#editor', {
  formats: [],
  placeholder: 'Enter your content...',
});
```

## modules 模塊配置

這個配置項放在最後並不代表它不重要，恰恰相反，這是 Quill 中最重量級也是最常用的配置。

Quill 一共有 6 個內置模塊：

1. Clipboard 粘貼版
2. History 操作歷史
3. Keyboard 鍵盤事件
4. Syntax 語法高亮
5. Toolbar 工具欄
6. Uploader 文件上傳

## 配置 toolbar 模塊

Quill 默認只在工具欄中顯示一部分格式化按鈕，里面沒有插入圖片的按鈕，我們可以通過配置 toolbar 模塊來增加。

```javascript
const quill = new Quill('#editor', {
  theme: 'snow',
  modules: {
    toolbar: [
      { header: [1, 2, 3, 4, 5, 6, false] }, // 標題
      'bold',             // 加粗
      'italic',           // 斜體
      'blockquote',       // 引用
      'link',             // 超鏈接
      'image',            // 插入圖片
      'video',            // 插入影片
      'code',             // 行內代碼
      'code-block',       // 代碼塊
      { list: 'bullet' }, // 無序列表
      { list: 'ordered'}, // 有序列表
      'strike',           // 刪除線
      { 'align': [] },    // 對齊方式
      'formula'           // 公式
    ]
  }
});
```

## 案例：查找替換功能

```javascript
// 待查找文本
const str = 'Quill';
const length = str.length;

// 匹配目標文本的正則
const reg = new RegExp(str, 'g');

let match;
while ((match = reg.exec(this.quill.getText())) !== null) {
  // 目標文本在文檔中的位置
  const index = match.index;
  
  // 匹配到目標文本之後，我們可以對該文本做 高亮 或 替換 的處理
  
  // 高亮
  this.quill.formatText(index, length, 'background', '#ef0fff');
  
  // 替換
  this.quill.deleteText(index, length);
  this.quill.insertText(index, 'QuillJS', 'link', 'https://quilljs.com/');
}
```