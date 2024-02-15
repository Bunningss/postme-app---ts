export interface InputsProps {
  type: string;
  placeholder: string;
  required: boolean;
  errorMsg: string;
  pattern?: string;
}

export interface SidebarItemsProps {
  label: string;
  icon: string;
}

export interface DropdownItemsProps {
  label: string;
  href: string;
}
