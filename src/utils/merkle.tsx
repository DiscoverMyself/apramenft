import { MerkleTree } from 'merkletreejs'
import { utils } from 'ethers'
import keccak256 from 'keccak256'
import { ALLOWLIST } from '../config/allowlist'

export interface MerkleDetails {
	merkleTree: MerkleTree
	root: string
}

export const generateTree = (elements: string[]): MerkleDetails => {
	const hashed = elements.map(e =>
		utils.solidityPack(['uint256'], [e.toLowerCase()]),
	)

	const merkleTree = new MerkleTree(hashed, keccak256, {
		hashLeaves: true,
		sortPairs: true,
	})

	return {
		merkleTree,
		root: merkleTree.getHexRoot(),
	}
}

export const getLeaf = (addr: string): Buffer =>
	keccak256(utils.solidityPack(['uint256'], [addr]))

export const getProof = (tree: MerkleTree, leaf: Buffer): string[] => tree.getHexProof(leaf)

const { root } = generateTree(ALLOWLIST)
console.error(`Merkle root: ${root}`)
