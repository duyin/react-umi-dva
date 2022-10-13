/*
 * @Author: 杜印 m18612326243@163.com
 * @Date: 2022-10-08 18:38:48
 * @LastEditors: 杜印 m18612326243@163.com
 * @LastEditTime: 2022-10-13 16:33:46
 * @FilePath: /abeats-develop/src/pages/Home/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  console.log(name,'name')
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
