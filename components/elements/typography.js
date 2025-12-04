import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

const H1 = ({ className, children, ...props }) => (
  <h1 className={cn("text-[46px] leading-[69px] md:text-[68px] md:leading-[102px]", className)} {...props}>
    {children}
  </h1>
);

const H2 = ({ className, children, ...props }) => (
  <h2 className={cn("text-[38px] leading-[57px] md:text-[56px] md:leading-[84px]", className)} {...props}>
    {children}
  </h2>
);

const H3 = ({ className, children, ...props }) => (
  <h3 className={cn("text-[32px] leading-12 md:text-[46px] md:leading-[69px]", className)} {...props}>
    {children}
  </h3>
);

const H4 = ({ className, children, ...props }) => (
  <h4 className={cn("text-[26px] leading-[39px] md:text-[38px] md:leading-[57px]", className)} {...props}>
    {children}
  </h4>
);

const H5 = ({ className, children, ...props }) => (
  <h5 className={cn("text-[22px] leading-[33px] md:text-[32px] md:leading-12", className)} {...props}>
    {children}
  </h5>
);

const H6 = ({ className, children, ...props }) => (
  <h6 className={cn("text-[18px] leading-[27px] md:text-[26px] md:leading-[39px]", className)} {...props}>
    {children}
  </h6>
);

const H7 = ({ className, children, ...props }) => (
  <p className={cn("text-[16px] leading-6 md:text-[22px] md:leading-[33px]", className)} {...props}>
    {children}
  </p>
);

const B1 = ({ className, children, ...props }) => (
  <p className={cn("text-[12px] leading-[18px] md:text-[18px] md:leading-[27px]", className)} {...props}>
    {children}
  </p>
);

const B2 = ({ className, children, ...props }) => (
  <p className={cn("text-[10px] leading-[15px] md:text-[16px] md:leading-6", className)} {...props}>
    {children}
  </p>
);

const B3 = ({ className, children, ...props }) => (
  <p className={cn("text-[10px] leading-[15px] md:text-[14px] md:leading-[21px]", className)} {...props}>
    {children}
  </p>
);

const B4 = ({ className, children, ...props }) => (
  <p className={cn("text-[12px] leading-[18px]", className)} {...props}>
    {children}
  </p>
);

const B5 = ({ className, children, ...props }) => (
  <p className={cn("text-[10px] leading-[15px]", className)} {...props}>
    {children}
  </p>
);

H1.propTypes = H2.propTypes = H3.propTypes = H4.propTypes = H5.propTypes = H6.propTypes = H7.propTypes = B1.propTypes = B2.propTypes= B3.propTypes= B4.propTypes= B5.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export { H1, H2, H3, H4, H5, H6, H7, B1, B2, B3, B4, B5 };
