export interface InformationItemsProps {
    sxWrap: SxProps<Theme> | undefined;
    firstSxTitle: SxProps<Theme> | undefined;
    secondSxTitle: SxProps<Theme> | undefined;
    firstTitle: string;
    secondTitle: string;
    firstOnClick: React.MouseEventHandler<HTMLSpanElement> | undefined;
    secondOnClick: React.MouseEventHandler<HTMLSpanElement> | undefined;
}