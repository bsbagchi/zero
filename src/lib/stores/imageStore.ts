import { writable } from 'svelte/store';

function createImageStore() {
    const { subscribe, set } = writable<{src: string; alt: string}[]>([]);

    const loadImages = async () => {
        const imageModules = import.meta.glob('/src/lib/images/image*.png', {
            eager: true
        });

        const images = Object.entries(imageModules).map(([path, module]: [string, any]) => ({
            src: module.default,
            alt: `Image ${path.match(/image(\d+)?\.png/)?.[1] || '1'}`
        }));

        set(images);
        return images;
    };

    return {
        subscribe,
        loadImages
    };
}

export const imageStore = createImageStore();