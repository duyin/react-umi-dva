/*
 * @Author: 杜印 m18612326243@163.com
 * @Date: 2022-10-08 18:38:48
 * @LastEditors: 杜印 m18612326243@163.com
 * @LastEditTime: 2022-10-13 17:25:17
 * @FilePath: /abeats-develop/src/models/global.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 全局共享数据示例
import { DEFAULT_NAME } from '@/constants';
import { useState } from 'react';

const useUser = () => {
  const [name, setName] = useState<string>(DEFAULT_NAME);
 
  return {
    name,
    setName,
  };
};
export default useUser;
