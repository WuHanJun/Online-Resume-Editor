/**
 * Created by lenovo on 2017/1/10.
 */
import defaultMember, * as myModule from './bar'; //�����ﱻ���� ͬʱ����������Ĭ�ϵı���ʱ��Ĭ�ϱ������ǰ����򱨴�

//myModule.bar(); //Ĭ�ϵ���Ĳ�����ôд
defaultMember();//����д
console.log(myModule.cube(3)); // 27*/
console.log(myModule.foo); //4.555806215962888ֻ�е����������myModule��ʱ���������д��
//import myModule, {foo, bar} from "my-module";��ʱ��foo��myModule.foo��ȫ��ͬ��