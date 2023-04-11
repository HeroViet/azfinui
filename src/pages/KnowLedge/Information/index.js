import DefaultFolder from '~/layouts/components/DefaultFolder';
import { DATA_GLOBAL } from '~/components/assets/datas';

function Infomation() {
    let isValid = true;
    const DATA_Infomation = DATA_GLOBAL.find((data) => data.title.includes('Thông tin kinh tế và đầu tư'));
    return <DefaultFolder handlesecond={isValid} datas={DATA_Infomation} headerTitle="Thông tin kinh tế và đầu tư" />;
}

export default Infomation;
