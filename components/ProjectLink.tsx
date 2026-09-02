"use client";

import Link from "next/link";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { projects } from "@/content/portfolio";

type Project = (typeof projects)[number];

export default function ProjectLink({
  project,
  children,
}: {
  project: Project;
  children: React.ReactNode;
}) {
  if (project.href === "#" && "details" in project) {
    return (
      <Dialog>
        <DialogTrigger className="card-link">{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{project.name}</DialogTitle>
            <DialogDescription>{project.stack.join(" · ")}</DialogDescription>
          </DialogHeader>
          <p style={{ color: "var(--text)", lineHeight: 1.65 }}>{project.details}</p>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Link href={project.href} className="card-link">
      {children}
    </Link>
  );
}
