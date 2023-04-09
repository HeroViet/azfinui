import { Fragment } from 'react';
import image from '~/components/assets/images';
import FolderTitle from '~/layouts/components/FolderTitle';

function generalPost() {
    return (
        <div className="flex flex-col">
            <FolderTitle data="Chưa có API ae thông cảm" />
            <img src={image.waiting} alt="waiting" />
        </div>
    );
}

export default generalPost;
