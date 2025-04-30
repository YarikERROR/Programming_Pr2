// Визначення класу TreeNode
class TreeNode {
    val: number;
    left: TreeNode | null = null;
    right: TreeNode | null = null;

    constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Визначення класу Solution
class Solution {
    isSymmetric(root: TreeNode | null): boolean {
        const isMirror = (t1: TreeNode | null, t2: TreeNode | null): boolean => {
            if (!t1 && !t2) return true;
            if (!t1 || !t2) return false;
            return (
                t1.val === t2.val &&
                isMirror(t1.left, t2.right) &&
                isMirror(t1.right, t2.left)
            );
        };

        return isMirror(root, root);
    }

    invertTree(root: TreeNode | null): TreeNode | null {
        if (!root) return null;

        const temp = root.left;
        root.left = this.invertTree(root.right);
        root.right = this.invertTree(temp);

        return root;
    }
}

// Приклад створення дерева
const root = new TreeNode(1,
    new TreeNode(2, new TreeNode(3), new TreeNode(4)),
    new TreeNode(2, new TreeNode(4), new TreeNode(3))
);

// Створення екземпляра класу Solution
const solution = new Solution();

// Перевірка симетрії дерева
console.log("Is the tree symmetric?", solution.isSymmetric(root));  // Очікується true

// Інвертування дерева
const inverted = solution.invertTree(root);

// Виведення інвертованого дерева
console.log("Inverted Tree:", inverted);
