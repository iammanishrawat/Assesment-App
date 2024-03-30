import React, { ReactNode } from 'react'
import BreadcrumbComponent from './Breadcrumbs'

interface Props {
  isHideBreadcrumb?: boolean;
  children?: ReactNode;
}
function PageContainer({
  isHideBreadcrumb = false,
  children = null
}: Props) {
  
  return (
    <div className="container-fluid">
      {!isHideBreadcrumb && (<BreadcrumbComponent />)} 
      {children}
    </div>    
  )
}

export default PageContainer