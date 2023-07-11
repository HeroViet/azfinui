import DefaultFolder from '~/layouts/components/DefaultFolder';
import { DATA_GLOBAL } from '~/components/assets/datas';

function AzfinNews() {
    const DATA_AZFINNEWS = DATA_GLOBAL.find((data) => data.kind.includes('News'));
    return <DefaultFolder handlesecond datas={DATA_AZFINNEWS} headerTitle="Tin Tức Azfin" />;
}

export default AzfinNews;
