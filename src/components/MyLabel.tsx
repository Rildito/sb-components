import './mylabel.css';

export interface MyLabelProps {
    /**
     * Este es el mensaje a mostrar en la etiqueta
     */
    label: string;
    /**
     * Este es el tamaño de la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Define el color del text
     */
    color: 'primary' | 'secondary' | 'tertiary';
    /**
     * Capitaliza el texto dentro del label
     */
    allCaps: boolean;
    /**
     * Color de la fuente del label
     */
    fontColor?: string;
}

export const MyLabel = ({
    allCaps = false,
    color = 'primary',
    fontColor,
    label = 'No Label',
    size = 'normal'
}: MyLabelProps) => {
    return (
        <span
            className={`label ${size} text-${color}`}
            style={{ color: fontColor }}
        >
            {allCaps ? label.toUpperCase() : label}
        </span >
    )
}
