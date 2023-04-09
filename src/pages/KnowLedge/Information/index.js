import DefaultFolder from '~/layouts/components/DefaultFolder';
import { DATA_GLOBAL } from '~/components/assets/datas';

function Infomation() {
    const DATA_Infomation = DATA_GLOBAL.find((data) => data.title.includes('Thông tin kinh tế và đầu tư'));
    return <DefaultFolder datas={DATA_Infomation} headerTitle="Thông tin kinh tế và đầu tư" />;
}

export default Infomation;
