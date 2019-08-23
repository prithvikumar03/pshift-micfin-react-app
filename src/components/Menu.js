const Menu = [
  {
    header: null,
    label: "Home",
    pathname: "/home"
  },
  {
    header: "MFI",
    label: "MFI",
    children: [
      {
        header: null,
        label: "Registration",
        pathname: "/mfi"
      },
      {
        header: null,
        label: "Search Entrepreneurs",
        pathname: "/searchEntrepreneurs"
      },
      {
        header: null,
        label: "Loan Repayment",
        pathname: "/loanRepayment"
      },
    ],
  },
  {
    header: null,
    label: "MicroEntrepreneur",
    pathname: "/microEntrepreneur"
  },
  {
    header: null,
    label: "Training",
    pathname: "/training"
  }

];

export default Menu;