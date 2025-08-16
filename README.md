最近写的一些PC到H5的游戏站，没有给时间写细节，要求一周写两个出来。
可以整体看一下响应式的处理能力。
有自己的设计来处理响应式。最佳实践。
![image](https://github.com/user-attachments/assets/0e793033-7403-413f-9503-b4cc9a8a4200)

// 后面使用Service Worker 缓存和IndexedDB海量缓存
// 不使用免费服务端中转缓存方案
// 游戏页面打开很慢要做hover时预加载
// 做一个液体玻璃导航栏效果
hover增加图片饱和度
filter: brightness(110%) contrast(110%) saturate(110%);

scroll-snap-type: x mandatory;
scroll-snap-align: center;
      scroll-snap-stop: always;

&::-webkit-scrollbar {
width: 0;
height: 0;
}


mobile css 重制属性值 margin: initial;

width: fit-content;

css文件
@import url("./main.css");
@import "index_mobile.css";

flex子级可以
margin: auto 10px;


响应式过程中多余元素，应该使用css隐藏，删除dom方案会触发页面闪烁，不好
&:nth-last-child(-n + 6) {
          display: none;
        }