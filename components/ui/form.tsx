"use client"

import * as React from "react"
import { Field } from "@base-ui/react/field"
import { Form as FormPrimitive } from "@base-ui/react/form"

import { cn } from "@/lib/utils"

const Form = FormPrimitive

function FormField({ className, ...props }: Field.Root.Props) {
  return (
    <Field.Root
      data-slot="form-field"
      className={cn("form-field", className)}
      {...props}
    />
  )
}

function FormLabel({ className, ...props }: Field.Label.Props) {
  return (
    <Field.Label
      data-slot="form-label"
      className={cn("form-label", className)}
      {...props}
    />
  )
}

function FormControl(props: Field.Control.Props) {
  return <Field.Control data-slot="form-control" {...props} />
}

function FormMessage({ className, ...props }: Field.Error.Props) {
  return (
    <Field.Error
      data-slot="form-message"
      className={cn("form-error", className)}
      {...props}
    />
  )
}

export { Form, FormField, FormLabel, FormControl, FormMessage }
