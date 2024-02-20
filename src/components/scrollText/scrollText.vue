<script setup lang="ts">
import './scrollText.css'

// const state = reactive({
//     offsetLeft: 0, // 左边文本位移量
//     offsetRight: 0, // 右边文本位移量
// });

// function startAnimation(): void {
//     setInterval(() => {
//         if (state.offsetLeft >= 50) {
//             state.offsetLeft -= 1;
//             state.offsetRight += 1;
//         } else {
//             state.offsetLeft = 0;
//             state.offsetRight = 0;
//         }
//     }, 16);
// }

// onMounted(startAnimation);
</script>

<template>
    <!-- <span style="margin-right: 4px">注意事项:</span> -->
    <div class="scroll-text">
        <!-- <span ref="leftSpan" :style="{ transform: `translateX(${offsetLeft}px)` }"></span> -->
        <span>
            暂无公告信息！
            外汇市场开放时间为工作日9:00-17:00，为确保当天及时处理您的结售汇交易，请尽量在时间段内发起交易确认，具体时间范围请咨询客户经理。
        </span>
        <!-- <span ref="rightSpan" :style="{ transform: `translateX(-${offsetRight}px)` }">
         暂无公告信息！
                外汇市场开放时间为工作日9:00-17:00，为确保当天及时处理您的结售汇交易，请尽量在时间段内发起交易确认，具体时间范围请咨询客户经理。</span> -->
    </div>
</template>

<style lang="scss" scoped>
.scroll-text {
    width: 80%;
    /* 设置容器宽度 */
    overflow: hidden;
    background-color: #fff2f0;
    border: 1px solid darkorange;
    height: 45px;
    line-height: 45px;
    border-radius: 8px;
}

// 左右滚动动画css实现
span {
    display: inline-block;
    white-space: nowrap;
    animation: scroll 15s linear infinite;
    width: 100%;
    font-weight: 700;
}

@keyframes scroll {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(0);
    }
}
</style>