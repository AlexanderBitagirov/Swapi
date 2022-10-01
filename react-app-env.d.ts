declare module '*.svg' {
    const content: React.FC<React.SVGProps<SVGSVGElement>>;
    export default content;
}

  declare module '*.css' {
    const content: Record<string, string>;
    export default content;
}

declare module "*.png" {
  const value: string;
  export default value;
}