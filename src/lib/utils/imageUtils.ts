export function getImageByIndex(index: number) {
    const imageModules = import.meta.glob('/src/lib/images/image*.png', {
        eager: true
    });
    
    const images = Object.entries(imageModules).map(([path, module]: [string, any]) => ({
        src: module.default,
        alt: `Image ${path.match(/image(\d+)?\.png/)?.[1] || '1'}`
    }));
    
    return images[index];
}