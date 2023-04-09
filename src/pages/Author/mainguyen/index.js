import { DATA_GLOBAL_SPREAD } from '~/components/assets/datas';
import Author from '~/layouts/components/Author';

function mainguyen() {
    const Data_mainguyen = DATA_GLOBAL_SPREAD.filter((data) => data.author.name.includes('mainguyen'));
    return <Author datas={Data_mainguyen} />;
}

export default mainguyen;
