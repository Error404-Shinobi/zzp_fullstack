#TwoSum leetcode

1. node有安装好吗？
    - node.exe pogramfiles/  
    - node全局访问
    gt
- node 是让js 运行在服务器端的环境，
    开发速度更快，但没有Java稳定
    Serve Linux pwd 获取当前位置
    node 1.js

做题过程：
- 读题
    整数数组 nums,traget 参数
    返回数组下标
    const nums=[2,7,11,15]  //对象数组类型
- 前期leetcode刷题先暴力，再调优 easy
    1. 时间复杂度
        O(n^2)
    2. 空间复杂度

- 提供一个算法
    O(n^2)->O(n)
    找一种适合的数据结构 
    Array 是一个数据集合，也是最基本的数据结构 下标是数字索引，空间是连续的
    JSON Object对象字面量 也是一个数据集合 在C里没有原生的，Java中称为hashMap
    O(n^2) -> O(n) + 空间多花销