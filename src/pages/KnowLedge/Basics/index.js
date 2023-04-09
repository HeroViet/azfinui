import DefaultFolder from '~/layouts/components/DefaultFolder';
import { DATA_GLOBAL } from '~/components/assets/datas';

function Basics() {
    const DATA_Basics = DATA_GLOBAL.find((data) => data.title.includes('Kiến thức cơ bản'));
    return <DefaultFolder datas={DATA_Basics} headerTitle="Kiến thức cơ bản" />;
}

export default Basics;
