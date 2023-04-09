import { DATA_GLOBAL_SPREAD } from '~/components/assets/datas';
import Author from '~/layouts/components/Author';

function hagiang() {
    const Data_hagiang = DATA_GLOBAL_SPREAD.filter((data) => data.author.name.includes('Hà Giang'));
    return <Author datas={Data_hagiang} />;
}

export default hagiang;
