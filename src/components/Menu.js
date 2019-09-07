const Menu = [
  {
    header: null,
    label: "Home",
    pathname: "/home"
  },
  {
    header: null,
    label: "DBS",
    pathname: "/dbsHome",
    userGroup:["DBS","SUPER"],
    entitlement:"PERFORMER",
    children: [
      {
        header: null,
        label: "Approve MFI",
        pathname: "/approveMFI"
      },
      {
        header: null,
        label: "Search",
        pathname: "/search"
      },
      {
        header: null,
        label: "Transactions",
        pathname: "/transactions"
      },
    ],
  },
  {
    header: null,
    label: "MFI",
    pathname: "/mfiHome",
    userGroup:["MFI","SUPER"],
    entitlement:"PERFORMER",
    /* children: [
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
      {
        header: null,
        label: "Transactions",
        pathname: "/mfiTransactions"
      },
    ], */
  },
  {
    header: null,
    label: "MicroEntrepreneur",
    pathname: "/meHome",
    userGroup:["ME","SUPER"],
    entitlement:"PERFORMER",
    /* children: [
      {
        header: null,
        label: "Registration",
        pathname: "/microEntrepreneur"
      },
      {
        header: null,
        label: "Transactions",
        pathname: "/transactions"
      },
    ], */
  },
  {
    header: null,
    label: "Training",
    pathname: "/training"
  },
  {
    header: null,
    label: "Support",
    pathname: "/support"
  }

];

export default Menu;