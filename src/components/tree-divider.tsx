import { TreeEvergreen } from "@phosphor-icons/react/dist/ssr";

export function TreeDivider() {
  return (
    <div className="tree-divider container-shell flex items-center gap-6 py-12" aria-hidden="true">
      <TreeEvergreen className="shrink-0 text-[#a48652]" size={27} weight="fill" />
    </div>
  );
}
